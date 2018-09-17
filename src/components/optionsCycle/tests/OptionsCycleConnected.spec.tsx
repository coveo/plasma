import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {IOptionsCycleProps, OptionsCycle} from '../OptionsCycle';
import {changeOptionsCycle} from '../OptionsCycleActions';
import {OptionsCycleConnected} from '../OptionsCycleConnected';

describe('Options cycle', () => {
    const optionsCycleBasicProps: IOptionsCycleProps = {
        id: 'options-cycle',
        options: ['option 1', 'option 2', 'option 3', 'option 4'],
    };

    describe('<OptionsCycleConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let optionsCycle: ReactWrapper<IOptionsCycleProps, any>;
        let store: Store<IReactVaporState>;

        beforeEach(() => {
            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <OptionsCycleConnected {...optionsCycleBasicProps} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            optionsCycle = wrapper.find(OptionsCycle).first();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        it('should get an id as a prop', () => {
            const idProp = optionsCycle.props().id;

            expect(idProp).toBeDefined();
            expect(idProp).toBe(optionsCycleBasicProps.id);
        });

        it('should get the current option as a prop', () => {
            const currentOptionProp = optionsCycle.props().currentOption;

            expect(currentOptionProp).toBeDefined();
            expect(currentOptionProp).toBe(0);
        });

        it('should get what to do on render as a prop', () => {
            const onRenderProp = optionsCycle.props().onRender;

            expect(onRenderProp).toBeDefined();
        });

        it('should get what to do on destroy as a prop', () => {
            const onDestroyProp = optionsCycle.props().onDestroy;

            expect(onDestroyProp).toBeDefined();
        });

        it('should get what to do on change as a prop', () => {
            const onChangeProp = optionsCycle.props().onChange;

            expect(onChangeProp).toBeDefined();
        });

        it('should return 0 for the currentOption when the options cycle does not exist in the state', () => {
            store.dispatch(clearState());

            expect(_.findWhere(store.getState().optionsCycles, {id: optionsCycleBasicProps.id})).toBeUndefined();
            expect(optionsCycle.props().currentOption).toBe(0);
        });

        it('should return  the currentOption from the state when the options cycle exists in the state', () => {
            const expectedCurrentOption = 5;

            store.dispatch(changeOptionsCycle(optionsCycleBasicProps.id, expectedCurrentOption));
            wrapper.update();

            expect(wrapper.find(OptionsCycle).props().currentOption).toBe(expectedCurrentOption);
        });

        it('should call onRender prop when mounted', () => {
            wrapper.unmount();
            store.dispatch(clearState());

            expect(store.getState().optionsCycles.length).toBe(0);

            wrapper.mount();

            expect(store.getState().optionsCycles.length).toBe(1);
        });

        it('should set the currentOption to the startAt prop', () => {
            const expectedCurrentOption: number = 3;
            const newProps = _.extend({}, optionsCycleBasicProps, {startAt: expectedCurrentOption});
            wrapper.unmount();
            store.dispatch(clearState());

            expect(store.getState().optionsCycles.length).toBe(0);

            wrapper = mount(
                <Provider store={store}>
                    <OptionsCycleConnected {...newProps} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            optionsCycle = wrapper.find(OptionsCycle).first();

            expect(_.findWhere(store.getState().optionsCycles, {id: optionsCycleBasicProps.id}).currentOption).toBe(expectedCurrentOption);
        });

        it('should call onDestroy prop when will unmount', () => {
            wrapper.unmount();

            expect(store.getState().optionsCycles.length).toBe(0);
        });

        it('should set the current option to the one sent when calling the onChange prop', () => {
            let expectedCurrentOption = 5;

            optionsCycle.props().onChange(expectedCurrentOption);

            expect(_.findWhere(store.getState().optionsCycles, {id: optionsCycleBasicProps.id}).currentOption).toBe(expectedCurrentOption);

            expectedCurrentOption = 19;

            optionsCycle.props().onChange(expectedCurrentOption);

            expect(_.findWhere(store.getState().optionsCycles, {id: optionsCycleBasicProps.id}).currentOption).toBe(expectedCurrentOption);
        });
    });
});
