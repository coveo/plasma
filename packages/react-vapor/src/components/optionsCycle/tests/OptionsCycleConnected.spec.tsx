import {ShallowWrapper} from 'enzyme';
import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';

import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {IOptionsCycleConnectedOwnProps, IOptionsCycleProps} from '../OptionsCycle';
import {addOptionsCycle, changeOptionsCycle} from '../OptionsCycleActions';
import {OptionsCycleConnected} from '../OptionsCycleConnected';

describe('Options cycle', () => {
    const optionsCycleBasicProps: IOptionsCycleProps & IOptionsCycleConnectedOwnProps = {
        id: 'options-cycle',
        options: ['option 1', 'option 2', 'option 3', 'option 4'],
    };

    describe('<OptionsCycleConnected />', () => {
        let optionsCycle: ShallowWrapper<IOptionsCycleProps>;
        let store: ReactVaporMockStore;

        const shallowCycleWithProps = (props: Partial<IOptionsCycleProps & IOptionsCycleConnectedOwnProps> = {}) => {
            return shallowWithStore(<OptionsCycleConnected {...optionsCycleBasicProps} {...props} />, store);
        };

        beforeEach(() => {
            store = getStoreMock({
                optionsCycles: [],
            });
        });

        it('should get the current option as a prop', () => {
            optionsCycle = shallowCycleWithProps();
            const currentOptionProp = optionsCycle.props().currentOption;

            expect(currentOptionProp).toBeDefined();
            expect(currentOptionProp).toBe(0);
        });

        it('should get what to do on render as a prop', () => {
            optionsCycle = shallowCycleWithProps();
            const onRenderProp = optionsCycle.props().onRender;

            expect(onRenderProp).toBeDefined();
        });

        it('should get what to do on destroy as a prop', () => {
            optionsCycle = shallowCycleWithProps();
            const onDestroyProp = optionsCycle.props().onDestroy;

            expect(onDestroyProp).toBeDefined();
        });

        it('should get what to do on change as a prop', () => {
            optionsCycle = shallowCycleWithProps();
            const onChangeProp = optionsCycle.props().onChange;

            expect(onChangeProp).toBeDefined();
        });

        it('should add the optionCycle to the state when mounted', () => {
            optionsCycle = shallowCycleWithProps().dive();
            expect(store.getActions()).toContain(addOptionsCycle(optionsCycleBasicProps.id, 0));
        });

        it('should add the optionCycle to the state when mounted with the startAt', () => {
            const startAt = 3;
            optionsCycle = shallowCycleWithProps({startAt}).dive();
            expect(store.getActions()).toContain(addOptionsCycle(optionsCycleBasicProps.id, startAt));
        });

        it('should set the currentOption to the startAt prop', () => {
            const expectedCurrentOption: number = 3;
            optionsCycle = shallowCycleWithProps({startAt: expectedCurrentOption});

            expect(optionsCycle.props().currentOption).toBe(expectedCurrentOption);
        });

        it('should remove the optionCycle from the state when the component is unmounted', () => {
            optionsCycle = shallowCycleWithProps().dive();
            optionsCycle.unmount();

            expect(store.getState().optionsCycles.length).toBe(0);
        });

        it('should dispatch a changeOptionsCycle when pressing the previous button', () => {
            const startAt = 2;
            const wrapper = shallowCycleWithProps({startAt}).dive();
            wrapper.find('.previous-option').simulate('click');

            expect(store.getActions()).toContain(changeOptionsCycle(optionsCycleBasicProps.id, startAt - 1));
        });

        it('should dispatch a changeOptionsCycle when pressing the next button', () => {
            const startAt = 2;
            const wrapper = shallowCycleWithProps({startAt}).dive();
            wrapper.find('.next-option').simulate('click');

            expect(store.getActions()).toContain(changeOptionsCycle(optionsCycleBasicProps.id, startAt + 1));
        });

        it('should dispatch a changeOptionsCycle by wrapping around when at 0 and the user press the previous button', () => {
            const startAt = 0;
            const wrapper = shallowCycleWithProps({startAt}).dive();
            wrapper.find('.previous-option').simulate('click');

            expect(store.getActions()).toContain(
                changeOptionsCycle(optionsCycleBasicProps.id, optionsCycleBasicProps.options.length - 1)
            );
        });

        it('should dispatch a changeOptionsCycle by wrapping around when at max and the user press the next button', () => {
            const startAt = optionsCycleBasicProps.options.length - 1;
            const wrapper = shallowCycleWithProps({startAt}).dive();
            wrapper.find('.next-option').simulate('click');

            expect(store.getActions()).toContain(changeOptionsCycle(optionsCycleBasicProps.id, 0));
        });

        it('should disable the previous button when wrapAround is false and the cycle is at 0', () => {
            const startAt = 0;
            const wrapper = shallowCycleWithProps({startAt, wrapAround: false}).dive();

            expect(wrapper.find('.previous-option').prop('disabled')).toBe(true);
        });

        it('should disable the next button when wrapAround is false and the cycle is at max', () => {
            const startAt = optionsCycleBasicProps.options.length - 1;
            const wrapper = shallowCycleWithProps({startAt, wrapAround: false}).dive();

            expect(wrapper.find('.next-option').prop('disabled')).toBe(true);
        });
    });
});
