import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import {IOptionProps, Option} from '../Option';

describe('Option picker', () => {
    const OPTION_BASIC_PROPS: IOptionProps = {
        option: {
            label: 'Option 1',
            value: () => 'optionValue',
        },
        isActive: false,
        onClick: jasmine.createSpy('onClick'),
    };

    describe('<Option />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <Option {...OPTION_BASIC_PROPS} />,
                );
            }).not.toThrow();
        });
    });

    describe('<Option />', () => {
        let option: ReactWrapper<IOptionProps, any>;

        beforeEach(() => {
            option = mount(
                <Option {...OPTION_BASIC_PROPS} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            option.detach();
        });

        it('should get the value as a prop', () => {
            const optionProp = option.props().option;

            expect(optionProp).toBeDefined();
            expect(optionProp).toEqual(OPTION_BASIC_PROPS.option);
        });

        it('should get if it is active as a prop', () => {
            const isActiveProp = option.props().isActive;

            expect(isActiveProp).toBeDefined();
            expect(isActiveProp).toEqual(OPTION_BASIC_PROPS.isActive);
        });

        it('should get what to do on click as a prop', () => {
            const onClickProp = option.props().onClick;

            expect(onClickProp).toBeDefined();
        });

        it('should display the option label', () => {
            expect(option.html()).toContain(OPTION_BASIC_PROPS.option.label);
        });

        it('should have the active class if isActive prop is set to true', () => {
            const activeOptionProps = _.extend({}, OPTION_BASIC_PROPS, {isActive: true});

            expect(option.find('button').hasClass('active')).toBe(false);

            option.setProps(activeOptionProps);

            expect(option.find('button').hasClass('active')).toBe(true);
        });

        it('should call the onClick prop with the result of the option value when clicking the button', () => {
            option.find('button').simulate('click');

            expect(OPTION_BASIC_PROPS.onClick).toHaveBeenCalledWith(
                OPTION_BASIC_PROPS.option.value(),
                OPTION_BASIC_PROPS.option.label,
            );
        });
    });
});
