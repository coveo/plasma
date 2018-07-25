import {mount} from 'enzyme';
import * as React from 'react';
import {Provider, Store} from 'react-redux';
import {findWhere} from 'underscore';

import {SlideY} from '../../../animations/SlideY';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {Collapsible, CollapsibleOwnProps} from '../Collapsible';
import {setCollapsibleExpanded} from '../CollapsibleActions';
import {CollapsibleConnected} from '../CollapsibleConnected';
import {collapsiblePossibleProps} from './CollapsibleTestCommon.spec';

describe('<CollapsibleConnected />', () => {
    let store: Store<IReactVaporState>;
    let basicCollapsibleProps: CollapsibleOwnProps;

    beforeEach(() => {
        store = TestUtils.buildStore();
        basicCollapsibleProps = {...collapsiblePossibleProps[0]};
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    const mountComponentWithProps = (props: CollapsibleOwnProps) => {
        return mount(
            <Provider store={store}>
                <CollapsibleConnected {...props}>
                    dummy children
                </CollapsibleConnected>
            </Provider>,
            {attachTo: document.getElementById('App')},
        );
    };

    it('should not throw when calling onMount', () => {
        expect(() => mountComponentWithProps(basicCollapsibleProps).find(Collapsible).props().onMount()).not.toThrow();
    });

    it('should not throw when calling onUnmount', () => {
        expect(() => mountComponentWithProps(basicCollapsibleProps).find(Collapsible).props().onUnmount()).not.toThrow();
    });

    it('should not throw when calling onToggleExpandedState', () => {
        expect(() => mountComponentWithProps(basicCollapsibleProps).find(Collapsible).props().onToggleExpandedState(true)).not.toThrow();
    });

    describe('render', () => {
        it('should render without error in different scenarios', () => {
            collapsiblePossibleProps.forEach((props: CollapsibleOwnProps) => {
                expect(() => mountComponentWithProps(props)).not.toThrow();
            });
        });

        it('should put the collapsible container in the store on mount', () => {
            expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id})).toBeUndefined();
            mountComponentWithProps(basicCollapsibleProps);
            expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id})).toBeDefined();
        });

        it('should put the collapsible container in the store on mount', () => {
            const collapsible = mountComponentWithProps(basicCollapsibleProps);
            expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id})).toBeDefined();
            collapsible.unmount();
            expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id})).toBeUndefined();
        });
    });

    describe('after render', () => {
        describe('Expansion/Toggling logic', () => {
            it('should toggle the expanded prop on click of the collapsible header button', () => {
                const collapsible = mountComponentWithProps(basicCollapsibleProps);
                const expandedBeforeClick = findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded;
                collapsible.find(`.${basicCollapsibleProps.headerClasses}`).simulate('click');
                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded)
                    .toBe(!expandedBeforeClick);

                collapsible.find(`.${basicCollapsibleProps.headerClasses}`).simulate('click');
                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded)
                    .toBe(expandedBeforeClick);
            });

            it('should toggle the SlideY component when CollapsibleActions.setExpanded is triggered', () => {
                const collapsible = mountComponentWithProps({...basicCollapsibleProps});
                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(false);

                store.dispatch(setCollapsibleExpanded(basicCollapsibleProps.id, true));

                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(true);
                expect(collapsible.find(SlideY).prop('in')).toBe(true);

                store.dispatch(setCollapsibleExpanded(basicCollapsibleProps.id, false));

                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(false);
                expect(collapsible.find(SlideY).prop('in')).toBe(false);
            });

            it('should render as expanded if expandedOnMount is passed in props', () => {
                const collapsible = mountComponentWithProps({...basicCollapsibleProps, expandedOnMount: true});

                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(true);
                expect(collapsible.find(SlideY).prop('in')).toBe(true);
            });

            it('should render as not expanded if expandedOnMount is not passed in props', () => {
                const collapsible = mountComponentWithProps(basicCollapsibleProps);

                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(false);
                expect(collapsible.find(SlideY).prop('in')).toBe(false);
            });
        });
    });
});
