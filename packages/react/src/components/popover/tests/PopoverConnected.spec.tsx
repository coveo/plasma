import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {findWhere} from 'underscore';

import {PlasmaState} from '../../../PlasmaState';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {IPopoverProps, Popover} from '../Popover';
import {PopoverConnected} from '../PopoverConnected';

describe('<PopoverConnected />', () => {
    let store: Store<PlasmaState>;
    let basicPopoverProps: IPopoverProps;

    beforeEach(() => {
        store = TestUtils.buildStore();
        basicPopoverProps = {attachment: 'top left', id: 'popover-connected'};
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    const mountComponentWithProps = (props: IPopoverProps) =>
        mount(
            <Provider store={store}>
                <PopoverConnected {...props}>
                    <div className="toggler">toggler</div>
                    <div>popover</div>
                </PopoverConnected>
            </Provider>,
            {attachTo: document.getElementById('App')},
        );

    it('should not throw when calling onMount', () => {
        expect(() => mountComponentWithProps(basicPopoverProps).find(Popover).props().onMount(true)).not.toThrow();
    });

    it('should not throw when calling onUnmount', () => {
        expect(() => mountComponentWithProps(basicPopoverProps).find(Popover).props().onUnmount()).not.toThrow();
    });

    it('should not throw when calling onToggle', () => {
        expect(() => mountComponentWithProps(basicPopoverProps).find(Popover).props().onToggle(true)).not.toThrow();
    });

    describe('render', () => {
        it('should render without error', () => {
            expect(() => mountComponentWithProps(basicPopoverProps)).not.toThrow();
        });

        it('should put the popover in the store on mount', () => {
            expect(findWhere(store.getState().popovers, {id: basicPopoverProps.id})).toBeUndefined();
            mountComponentWithProps(basicPopoverProps);

            expect(findWhere(store.getState().popovers, {id: basicPopoverProps.id})).toBeDefined();
        });

        it('should remove the popover from the store on unmount', () => {
            const popover = mountComponentWithProps(basicPopoverProps);

            expect(findWhere(store.getState().popovers, {id: basicPopoverProps.id})).toBeDefined();
            popover.unmount();

            expect(findWhere(store.getState().popovers, {id: basicPopoverProps.id})).toBeUndefined();
        });
    });

    describe('after render', () => {
        describe('Toggling logic', () => {
            it('should toggle the isOpen prop on click of the popover toggler', () => {
                const popover = mountComponentWithProps(basicPopoverProps);
                const isOpenBeforeClick = findWhere(store.getState().popovers, {id: basicPopoverProps.id}).isOpen;
                popover.find('.toggler').simulate('click');

                expect(findWhere(store.getState().popovers, {id: basicPopoverProps.id}).isOpen).toBe(
                    !isOpenBeforeClick,
                );

                popover.find('.toggler').simulate('click');

                expect(findWhere(store.getState().popovers, {id: basicPopoverProps.id}).isOpen).toBe(isOpenBeforeClick);
            });
        });
    });
});
