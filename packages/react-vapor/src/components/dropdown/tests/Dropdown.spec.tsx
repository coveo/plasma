import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import {Dropdown, IDropdownProps} from '../Dropdown';

describe('Dropdown', () => {
    const basicDropdownProps: IDropdownProps = {
        toggleContent: [<span key='toggle'>Toggle</span>],
        dropdownItems: [
            <li key='option1'>Option 1</li>,
            <li key='option2'>Option 2</li>,
        ],
    };

    describe('<Dropdown />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <Dropdown {...basicDropdownProps} />,
                );
            }).not.toThrow();
        });
    });

    describe('<Dropdown />', () => {
        let dropdown: ReactWrapper<IDropdownProps, any>;
        let dropdownInstance: Dropdown;

        beforeEach(() => {
            dropdown = mount(
                <Dropdown {...basicDropdownProps} />,
                {attachTo: document.getElementById('App')},
            );
            dropdownInstance = dropdown.instance() as Dropdown;
        });

        afterEach(() => {
            dropdown.detach();
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
            const onClickSpy = jasmine.createSpy('onClick');
            const newDropdownProps = _.extend({}, basicDropdownProps, {onClick: onClickSpy});

            expect(() => dropdownInstance['handleClick'].call(dropdownInstance)).not.toThrow();

            dropdown.setProps(newDropdownProps);
            dropdown.find('.dropdown-toggle').simulate('click');
            expect(onClickSpy).toHaveBeenCalled();
        });
    });

    describe('<Dropdown />', () => {
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
            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');
            const props = _.extend({}, basicDropdownProps, {onDocumentClick: onDocumentClickSpy});

            mount(<Dropdown {...props} />, {attachTo: document.getElementById('App')});
            clickOnOther();
            expect(onDocumentClickSpy).not.toHaveBeenCalled();
        });

        it('should add a listener on document on mount and remove it on unmount if prop onDocumentClick is set', () => {
            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');
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
            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');
            const props = _.extend({}, basicDropdownProps, {isOpened: true, onDocumentClick: onDocumentClickSpy});

            mount(<Dropdown {...props} />, {attachTo: document.getElementById('App')});

            (document.getElementsByClassName('dropdown')[0] as HTMLDivElement).click();
            expect(onDocumentClickSpy).not.toHaveBeenCalled();

            document.getElementById('App').click();
            expect(onDocumentClickSpy).toHaveBeenCalled();
        });
    });
});
