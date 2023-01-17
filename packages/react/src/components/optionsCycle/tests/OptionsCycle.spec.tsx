import {shallow, ShallowWrapper} from 'enzyme';
import {shallowWithState} from '@test-utils';
import * as _ from 'underscore';

import {IOptionsCycleProps, OptionsCycle} from '../OptionsCycle.js';

describe('Options cycle', () => {
    const OPTIONS = [
        <div className="option1">'option 1'</div>,
        <div className="option2">'option 2'</div>,
        'option 3',
        'option 4',
    ];

    it('should render without errors', () => {
        expect(() => {
            shallow(<OptionsCycle options={OPTIONS} />);
        }).not.toThrow();
    });

    describe('<OptionsCycle />', () => {
        let optionsCycleWrapper: ShallowWrapper<IOptionsCycleProps, any>;

        const mountComponent = (props: Partial<IOptionsCycleProps> = {}) => {
            optionsCycleWrapper = shallowWithState(<OptionsCycle options={OPTIONS} {...props} />, {});
        };

        it('should call prop onRender on mounting if set', () => {
            const renderSpy = jest.fn();
            mountComponent({onRender: renderSpy});

            expect(renderSpy.mock.calls.length).toBe(1);
        });

        it('should call prop onDestroy on unmounting if set', () => {
            const destroySpy = jest.fn();
            mountComponent({onDestroy: destroySpy});

            optionsCycleWrapper.unmount();

            expect(destroySpy.mock.calls.length).toBe(1);
        });

        it('should display the selected option', () => {
            mountComponent();

            expect(optionsCycleWrapper.find('div.option1').length).toBe(1);

            optionsCycleWrapper.setProps({options: OPTIONS, currentOption: 1});

            expect(optionsCycleWrapper.find('div.option2').length).toBe(1);
        });

        it('should display the selected option even if it is not a string', () => {
            const className = 'catch-me-if-you-can';
            const options = [
                <span className="something" />,
                <span className={className} />,
                <span className="something-else" />,
            ];
            mountComponent({options, className, currentOption: 1});

            expect(optionsCycleWrapper.find(`.${className}`).exists()).toBe(true);
        });

        it('should allow custom classes', () => {
            const className = 'i-wonder';
            const previousClassName = 'where-is';
            const nextClassName = 'the-closest';
            const buttonClassName = 'wonder-there-is';
            mountComponent({className, previousClassName, nextClassName, buttonClassName});

            expect(optionsCycleWrapper.find(`.${className}`).exists()).toBe(true);
            expect(optionsCycleWrapper.find(`.${previousClassName}`).exists()).toBe(true);
            expect(optionsCycleWrapper.find(`.${nextClassName}`).exists()).toBe(true);
            expect(optionsCycleWrapper.find(`.${buttonClassName}`).exists()).toBe(true);
        });

        it('should call onChange when clicking the previous arrow', () => {
            const spyOnChange = jest.fn();

            mountComponent({onChange: spyOnChange});

            optionsCycleWrapper.find('.previous-option').simulate('click');

            expect(spyOnChange.mock.calls.length).toBe(1);
        });

        it('should call onChange when clicking the next arrow', () => {
            const spyOnChange = jest.fn();

            mountComponent({onChange: spyOnChange});

            optionsCycleWrapper.find('.next-option').simulate('click');

            expect(spyOnChange.mock.calls.length).toBe(1);
        });

        it('should call onChangeOption when clicking the previous arrow', () => {
            const spyOnChangeOption = jest.fn();

            mountComponent({onChangeOption: spyOnChangeOption, onChange: _.noop});

            optionsCycleWrapper.find('.previous-option').simulate('click');

            expect(spyOnChangeOption.mock.calls.length).toBe(1);
        });

        it('should call onChangeOption when clicking the next arrow', () => {
            const spyOnChangeOption = jest.fn();

            mountComponent({onChange: spyOnChangeOption});

            optionsCycleWrapper.find('.next-option').simulate('click');

            expect(spyOnChangeOption.mock.calls.length).toBe(1);
        });

        it('should call onChange with the last option when clicking on the previous arrow if the current option is the first one', () => {
            const spyOnChange = jest.fn();

            mountComponent({onChange: spyOnChange, currentOption: 0});
            optionsCycleWrapper.find('.previous-option').simulate('click');

            expect(spyOnChange).toHaveBeenCalledWith(OPTIONS.length - 1);
        });

        it('should call onChange with the previous option when clicking on the previous arrow if the current option is not the first one', () => {
            const spyOnChange = jest.fn();

            mountComponent({onChange: spyOnChange, currentOption: 2});
            optionsCycleWrapper.find('.previous-option').simulate('click');

            expect(spyOnChange).toHaveBeenCalledWith(1);
        });

        it('should call onChange with the first option when clicking on the next arrow if the current option is the last one', () => {
            const spyOnChange = jest.fn();

            mountComponent({onChange: spyOnChange, currentOption: OPTIONS.length - 1});
            optionsCycleWrapper.find('.next-option').simulate('click');

            expect(spyOnChange).toHaveBeenCalledWith(0);
        });

        it('should call onChange with the previous option when clicking on the next arrow if the current option is not the last one', () => {
            const spyOnChange = jest.fn();

            mountComponent({onChange: spyOnChange, currentOption: 2});
            optionsCycleWrapper.find('.next-option').simulate('click');

            expect(spyOnChange).toHaveBeenCalledWith(3);
        });

        it('should have the class "mod-inline" if isInline prop is set to true', () => {
            mountComponent({isInline: true});

            expect(optionsCycleWrapper.find('.mod-inline').length).toBe(1);
        });
    });
});
