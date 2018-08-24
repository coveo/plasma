import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {Flippable, IFlippableProps} from '../Flippable';
import {changeFlippableSide} from '../FlippableActions';
import {FlippableConnected} from '../FlippableConnected';

describe('Flippable', () => {
    describe('<FlippableConnected />', () => {
        const FLIPPABLE_BASIC_PROPS: IFlippableProps = {
            id: 'some-id',
        };

        let wrapper: ReactWrapper<any, any>;
        let flippable: ReactWrapper<IFlippableProps, any>;
        let store: Store<IReactVaporState>;

        const mountWithProps = (props: IFlippableProps) => {
            wrapper = mount(
                <Provider store={store}>
                    <FlippableConnected {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            flippable = wrapper.find(Flippable).first();
        };

        beforeEach(() => {
            store = TestUtils.buildStore();
            mountWithProps(FLIPPABLE_BASIC_PROPS);
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        it('should get an id as prop', () => {
            expect(flippable.props().id).toBe(FLIPPABLE_BASIC_PROPS.id);
        });

        it('should get if the flippable is flipped as prop', () => {
            const isFlippedProp = flippable.props().isFlipped;

            expect(isFlippedProp).toBeDefined();
            expect(isFlippedProp).toBe(false);
        });

        it('should get what to do on render', () => {
            expect(flippable.props().onRender).toBeDefined();
        });

        it('should get what to do on destroy', () => {
            expect(flippable.props().onDestroy).toBeDefined();
        });

        it('should get what to do on flip', () => {
            expect(flippable.props().onFlip).toBeDefined();
        });

        it('should get what to do on unflip', () => {
            expect(flippable.props().onUnflip).toBeDefined();
        });

        it('should be removed from the store when unmounted', () => {
            expect(store.getState().flippables.length).toBe(1);

            wrapper.unmount();

            expect(store.getState().flippables.length).toBe(0);
        });

        it('should add a Flippable in the store when mounted', () => {
            wrapper.unmount();
            store.dispatch(clearState());

            expect(store.getState().flippables.length).toBe(0);

            wrapper.mount();

            expect(store.getState().flippables.length).toBe(1);
        });

        it('should flip the flippable component when calling onFlip prop', () => {
            expect(flippable.props().isFlipped).toBe(false);

            flippable.props().onFlip();
            wrapper.update();

            expect(wrapper.find(Flippable).props().isFlipped).toBe(true);
        });

        it('should unflip the flippable component when calling onUnflip prop', () => {
            store.dispatch(changeFlippableSide(FLIPPABLE_BASIC_PROPS.id, true));
            wrapper.update();

            expect(wrapper.find(Flippable).props().isFlipped).toBe(true);

            wrapper.find(Flippable).props().onUnflip();
            wrapper.update();

            expect(wrapper.find(Flippable).props().isFlipped).toBe(false);
        });
    });
});
