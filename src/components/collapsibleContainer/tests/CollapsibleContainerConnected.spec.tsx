import {mount} from 'enzyme';
import * as React from 'react';
import {Provider, Store} from 'react-redux';
import {findWhere} from 'underscore';
import {SlideY} from '../../../animations/SlideY';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {LinkSvg} from '../../svg/LinkSvg';
import {Svg} from '../../svg/Svg';
import {Tooltip} from '../../tooltip/Tooltip';
import {ICollapsibleContainerOwnProps, ICollapsibleContainerProps} from '../CollapsibleContainer';
import {CollapsibleContainer} from '../CollapsibleContainer';
import {setExpandedCollapsibleContainer} from '../CollapsibleContainerActions';
import {CollapsibleContainerConnected} from '../CollapsibleContainerConnected';
import {collapsibleContainerPossibleProps} from './CollapsibleContainerTestCommon.spec';

describe('<CollapsibleContainerConnected />', () => {
    let store: Store<IReactVaporState>;
    let basicCollapsibleContainerProps: ICollapsibleContainerOwnProps;

    beforeEach(() => {
        store = TestUtils.buildStore();
        basicCollapsibleContainerProps = {...collapsibleContainerPossibleProps[0]};
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    const mountComponentWithProps = (props: ICollapsibleContainerOwnProps) => {
        return mount(
            <Provider store={store}>
                <CollapsibleContainerConnected {...props}>
                    dummy children
        </CollapsibleContainerConnected>
            </Provider>,
            {attachTo: document.getElementById('App')},
        );
    };

    it('should not throw when calling onMount', () => {
        expect(() => mountComponentWithProps(basicCollapsibleContainerProps).find(CollapsibleContainer).props().onMount()).not.toThrow();
    });

    it('should not throw when calling onUnmount', () => {
        expect(() => mountComponentWithProps(basicCollapsibleContainerProps).find(CollapsibleContainer).props().onUnmount()).not.toThrow();
    });

    it('should not throw when calling onToggleExpandedState', () => {
        expect(() => mountComponentWithProps(basicCollapsibleContainerProps).find(CollapsibleContainer).props().onToggleExpandedState(true)).not.toThrow();
    });

    describe('render', () => {
        it('should render without error in different scenarios', () => {
            collapsibleContainerPossibleProps.forEach((props: ICollapsibleContainerProps) => {
                expect(() => mountComponentWithProps(props)).not.toThrow();
            });
        });

        it('should put the collapsible container in the store on mount', () => {
            expect(findWhere(store.getState().collapsibleContainers, {id: basicCollapsibleContainerProps.id})).toBeUndefined();
            mountComponentWithProps(basicCollapsibleContainerProps);
            expect(findWhere(store.getState().collapsibleContainers, {id: basicCollapsibleContainerProps.id})).toBeDefined();
        });

        it('should put the collapsible container in the store on mount', () => {
            const collapsible = mountComponentWithProps(basicCollapsibleContainerProps);
            expect(findWhere(store.getState().collapsibleContainers, {id: basicCollapsibleContainerProps.id})).toBeDefined();
            collapsible.unmount();
            expect(findWhere(store.getState().collapsibleContainers, {id: basicCollapsibleContainerProps.id})).toBeUndefined();
        });
    });

    describe('after render', () => {
        describe('Expansion/Toggling logic', () => {
            it('should toggle the expanded prop on click of the collapsible header button', () => {
                const collapsible = mountComponentWithProps(basicCollapsibleContainerProps);
                const expandedBeforeClick = findWhere(store.getState().collapsibleContainers, {id: basicCollapsibleContainerProps.id}).expanded;
                collapsible.find('.collapsible-header button').simulate('click');
                expect(findWhere(store.getState().collapsibleContainers, {id: basicCollapsibleContainerProps.id}).expanded)
                    .toBe(!expandedBeforeClick);

                collapsible.find('.collapsible-header button').simulate('click');
                expect(findWhere(store.getState().collapsibleContainers, {id: basicCollapsibleContainerProps.id}).expanded)
                    .toBe(expandedBeforeClick);
            });

            it('should toggle the expanded state when CollapsibleContainerActions.setExpanded is triggered', () => {
                const collapsible = mountComponentWithProps({...basicCollapsibleContainerProps});
                expect(findWhere(store.getState().collapsibleContainers, {id: basicCollapsibleContainerProps.id}).expanded).toBe(false);

                store.dispatch(setExpandedCollapsibleContainer(basicCollapsibleContainerProps.id, true));

                expect(findWhere(store.getState().collapsibleContainers, {id: basicCollapsibleContainerProps.id}).expanded).toBe(true);
                expect(collapsible.find('.collapsible-header').hasClass('active')).toBe(true);
                expect(collapsible.find(SlideY).prop('in')).toBe(true);

                store.dispatch(setExpandedCollapsibleContainer(basicCollapsibleContainerProps.id, false));

                expect(findWhere(store.getState().collapsibleContainers, {id: basicCollapsibleContainerProps.id}).expanded).toBe(false);
                expect(collapsible.find('.collapsible-header').hasClass('active')).toBe(false);
                expect(collapsible.find(SlideY).prop('in')).toBe(false);
            });

            it('should render as expanded if expandedOnMount is passed in props', () => {
                const collapsible = mountComponentWithProps({...basicCollapsibleContainerProps, expandedOnMount: true});
                expect(findWhere(store.getState().collapsibleContainers, {id: basicCollapsibleContainerProps.id}).expanded).toBe(true);
                expect(collapsible.find('.collapsible-header').hasClass('active')).toBe(true);
                expect(collapsible.find(SlideY).prop('in')).toBe(true);
            });

            it('should render as not expanded if expandedOnMount is not passed in props', () => {
                const collapsible = mountComponentWithProps(basicCollapsibleContainerProps);
                expect(findWhere(store.getState().collapsibleContainers, {id: basicCollapsibleContainerProps.id}).expanded).toBe(false);
                expect(collapsible.find('.collapsible-header').hasClass('active')).toBe(false);
                expect(collapsible.find(SlideY).prop('in')).toBe(false);
            });
        });

        describe('Header Svg logic', () => {
            it('should render with no svg if no informationUrl and informationTooltip are passed', () => {
                const collapsibleHeader = mountComponentWithProps(basicCollapsibleContainerProps);
                expect(collapsibleHeader.find('.collapsible-header').find(Svg).length).toBe(0);
            });

            it('should render with an orange LinkSvg if informationUrl is passed', () => {
                const collapsible = mountComponentWithProps({...basicCollapsibleContainerProps, informationUrl: 'http://whatever.com'});
                expect(collapsible.find('.collapsible-header').find(LinkSvg).length).toBe(1);
                expect(collapsible.find('.collapsible-header').find(LinkSvg).prop('svg').svgClass).toContain('fill-orange');
            });

            it('should render with a grey Svg nested in a Tooltip if informationTooltip is passed and not informationUrl', () => {
                const collapsible = mountComponentWithProps({...basicCollapsibleContainerProps, informationTooltip: {title: 'whatever'}});
                expect(collapsible.find('.collapsible-header').find(Tooltip).length).toBe(1);
                expect(collapsible.find('.collapsible-header').find(Tooltip).find(Svg).length).toBe(1);
                expect(collapsible.find('.collapsible-header').find(Tooltip).find(Svg).prop('svgClass')).toContain('fill-medium-grey');
            });
        });
    });
});
