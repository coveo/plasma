import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
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
    let collapsible: ReactWrapper<CollapsibleOwnProps>;

    const mountComponentWithProps = (props: CollapsibleOwnProps) => {
        if (collapsible && collapsible.length) {
            collapsible.unmount();
        }
        collapsible = mount(
            <Provider store={store}>
                <CollapsibleConnected {...props}>
                    dummy children
                </CollapsibleConnected>
            </Provider>,
            {attachTo: document.getElementById('App')},
        );
        return collapsible;
    };

    beforeEach(() => {
        store = TestUtils.buildStore();
        basicCollapsibleProps = {...collapsiblePossibleProps[0]};
    });

    afterEach(() => {
        store.dispatch(clearState());
        collapsible.detach();
    });

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
            mountComponentWithProps(basicCollapsibleProps);
            expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id})).toBeDefined();
            collapsible.unmount();
            expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id})).toBeUndefined();
        });
    });

    describe('after render', () => {
        describe('Expansion/Toggling logic', () => {
            it('should toggle the expanded prop on click of the collapsible header button', () => {
                mountComponentWithProps(basicCollapsibleProps);
                const expandedBeforeClick = findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded;
                collapsible.find(`.${basicCollapsibleProps.headerClasses}`).simulate('click');
                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded)
                    .toBe(!expandedBeforeClick);

                collapsible.find(`.${basicCollapsibleProps.headerClasses}`).simulate('click');
                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded)
                    .toBe(expandedBeforeClick);
            });

            it('should toggle the SlideY component when CollapsibleActions.setExpanded is triggered', () => {
                mountComponentWithProps({...basicCollapsibleProps});
                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(false);

                store.dispatch(setCollapsibleExpanded(basicCollapsibleProps.id, true));
                collapsible.update();

                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(true);
                expect(collapsible.find(SlideY).prop('in')).toBe(true);

                store.dispatch(setCollapsibleExpanded(basicCollapsibleProps.id, false));
                collapsible.update();

                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(false);
                expect(collapsible.find(SlideY).prop('in')).toBe(false);
            });

            it('should render as expanded if expandedOnMount is passed in props', () => {
                mountComponentWithProps({...basicCollapsibleProps, expandedOnMount: true});

                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(true);
                expect(collapsible.find(SlideY).prop('in')).toBe(true);
            });

            it('should render as not expanded if expandedOnMount is not passed in props', () => {
                mountComponentWithProps(basicCollapsibleProps);

                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(false);
                expect(collapsible.find(SlideY).prop('in')).toBe(false);
            });
        });
    });
});
