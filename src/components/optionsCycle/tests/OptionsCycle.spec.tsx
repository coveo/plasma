import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {IOptionsCycleProps, OptionsCycle} from '../OptionsCycle';

describe('Options cycle', () => {
    const OPTIONS = ['option 1', 'option 2', 'option 3', 'option 4'];

    describe('<OptionsCycle />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <OptionsCycle options={OPTIONS} />,
                );
            }).not.toThrow();
        });
    });

    describe('<OptionsCycle />', () => {
        let optionsCycle: ReactWrapper<IOptionsCycleProps, any>;
        let optionsCycleInstance: OptionsCycle;

        beforeEach(() => {
            optionsCycle = mount(
                <OptionsCycle options={OPTIONS} />,
                {attachTo: document.getElementById('App')},
            );
            optionsCycleInstance = optionsCycle.instance() as OptionsCycle;
        });

        afterEach(() => {
            optionsCycle.detach();
        });

        it('should get the options as a prop', () => {
            const optionsProp = optionsCycle.props().options;

            expect(optionsProp).toBeDefined();
            expect(optionsProp).toEqual(OPTIONS);
        });

        it('should call prop onRender on mounting if set', () => {
            const renderSpy = jasmine.createSpy('onRender');

            expect(() => optionsCycleInstance.componentWillMount()).not.toThrow();

            optionsCycle.setProps({options: OPTIONS, onRender: renderSpy});
            optionsCycle.unmount();
            optionsCycle.mount();
            expect(renderSpy.calls.count()).toBe(1);
        });

        it('should call prop onDestroy on unmounting if set', () => {
            const destroySpy = jasmine.createSpy('onDestroy');

            expect(() => optionsCycleInstance.componentWillUnmount()).not.toThrow();

            optionsCycle.setProps({options: OPTIONS, onDestroy: destroySpy});
            optionsCycle.mount();
            optionsCycle.unmount();
            expect(destroySpy.calls.count()).toBe(1);
        });

        it('should display the selected option', () => {
            expect(optionsCycle.html()).toContain(OPTIONS[0]);

            optionsCycle.setProps({options: OPTIONS, currentOption: 2});

            expect(optionsCycle.html()).toContain(OPTIONS[2]);
        });

        it('should not throw on goToPreviousOption or goToNextOption when onChange prop is not defined', () => {
            expect(() => {
                optionsCycleInstance['goToPreviousOption'].call(optionsCycleInstance);
            }).not.toThrow();

            expect(() => {
                optionsCycleInstance['goToNextOption'].call(optionsCycleInstance);
            }).not.toThrow();
        });

        it('should call goToPreviousOption when clicking the previous arrow', () => {
            const goToPreviousOptionSpy = spyOn<any>(optionsCycleInstance, 'goToPreviousOption');

            optionsCycle.find('.previous-option').simulate('click');
            expect(goToPreviousOptionSpy.calls.count()).toBe(1);
        });

        it('should call goToNextOption when clicking the previous arrow', () => {
            const goToNextOptionSpy = spyOn<any>(optionsCycleInstance, 'goToNextOption');

            optionsCycle.find('.next-option').simulate('click');
            expect(goToNextOptionSpy.calls.count()).toBe(1);
        });

        it('should call onChange when clicking the previous or next arrow if the prop is defined', () => {
            const onChangeSpy = jasmine.createSpy('onChange');

            optionsCycle.setProps({options: OPTIONS, onChange: onChangeSpy});

            optionsCycle.find('.previous-option').simulate('click');

            expect(onChangeSpy.calls.count()).toBe(1);

            optionsCycle.find('.next-option').simulate('click');

            expect(onChangeSpy.calls.count()).toBe(2);
        });

        it('should call onChange with the last option when clicking on the previous arrow if the current option is the first one', () => {
            const onChangeSpy = jasmine.createSpy('onChange');

            optionsCycle.setProps({options: OPTIONS, onChange: onChangeSpy, currentOption: 0});
            optionsCycle.find('.previous-option').simulate('click');

            expect(onChangeSpy).toHaveBeenCalledWith((OPTIONS.length - 1));
        });

        it('should call onChange with the previous option when clicking on the previous arrow if the current option is not the first one',
            () => {
                const onChangeSpy = jasmine.createSpy('onChange');

                optionsCycle.setProps({options: OPTIONS, onChange: onChangeSpy, currentOption: 2});
                optionsCycle.find('.previous-option').simulate('click');

                expect(onChangeSpy).toHaveBeenCalledWith(1);
            });

        it('should call onChange with the first option when clicking on the next arrow if the current option is the last one', () => {
            const onChangeSpy = jasmine.createSpy('onChange');

            optionsCycle.setProps({options: OPTIONS, onChange: onChangeSpy, currentOption: (OPTIONS.length - 1)});
            optionsCycle.find('.next-option').simulate('click');

            expect(onChangeSpy).toHaveBeenCalledWith(0);
        });

        it('should call onChange with the previous option when clicking on the next arrow if the current option is not the last one', () => {
            const onChangeSpy = jasmine.createSpy('onChange');

            optionsCycle.setProps({options: OPTIONS, onChange: onChangeSpy, currentOption: 2});
            optionsCycle.find('.next-option').simulate('click');

            expect(onChangeSpy).toHaveBeenCalledWith(3);
        });

        it('should have the class "mod-inline" if isInline prop is set to true', () => {
            expect(optionsCycle.find('.mod-inline').length).toBe(0);

            optionsCycle.setProps({options: OPTIONS, isInline: true});

            expect(optionsCycle.find('.mod-inline').length).toBe(1);
        });

        it('should show the option which is at index startAt if it is defined as a prop on mount or just show the first one', () => {
            const startAt: number = 3;

            expect(optionsCycle.html()).toContain(OPTIONS[0]);

            optionsCycle.unmount();
            optionsCycle = mount(
                <OptionsCycle options={OPTIONS} startAt={startAt} />,
                {attachTo: document.getElementById('App')},
            );

            expect(optionsCycle.html()).toContain(OPTIONS[startAt]);
        });
    });
});
