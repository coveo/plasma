import {ShallowWrapper} from 'enzyme';
import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {Store} from 'redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {ListBox} from '../../listBox/ListBox';
import {Svg} from '../../svg/Svg';
import {ActionableItem, IActionableItemProps} from '../ActionableItem';

describe('ActionableItem', () => {
    const basicProps: IActionableItemProps = {
        id: 'actionable-item',
        actions: [{value: 'some action'}],
    };
    let actionableItem: ShallowWrapper<IActionableItemProps>;

    describe('<ActionableItem />', () => {
        let store: Store<IReactVaporState>;

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
        });

        const shallowWithProps = (props: Partial<IActionableItemProps> = basicProps, children: React.ReactNode = '') => {
            actionableItem = shallowWithStore(<ActionableItem {...basicProps} {...props}>{children}</ActionableItem>, store);
        };

        it('should mount without error', () => {
            expect(() => shallowWithProps()).not.toThrow();
            expect(() => shallowWithProps(undefined, <div>hello world</div>)).not.toThrow();
        });

        describe('after mount', () => {
            beforeEach(() => {
                shallowWithProps();
            });

            it('should render the children in the actionable-item-content container', () => {
                const children = <div className='children'>hello world</div>;
                shallowWithProps(undefined, children);

                expect(actionableItem.find('.actionable-item-content').find('.children').length).toBe(1);
            });

            it('should render the more-append svg in the actionable-item-dots container', () => {
                shallowWithProps();

                expect(actionableItem.find('.actionable-item-dots').find(Svg).prop('svgName')).toBe('more-append');
            });

            it('should not render the more-append svg in the actionable-item-dots container if no actions', () => {
                shallowWithProps({id: 'mountwithnoactions', actions: []});

                expect(actionableItem.find('.actionable-item-dots').find(Svg).length).toBe(0);
            });

            it('should render the actions in a list-box', () => {
                shallowWithProps();

                // React-Tether renders the attached element to the body of the page, thus we need to start from there
                expect(actionableItem.find(ListBox).exists()).toBe(true);
            });

            it('should not have the cursor-pointer class if onItemClick is not passed as prop', () => {
                shallowWithProps();

                expect(actionableItem.find('.actionable-item-content').hasClass('cursor-pointer')).toBe(false);
            });

            it('should have the cursor-pointer class if onItemClick is passed as prop', () => {
                shallowWithProps({id: 'someid', onItemClick: _.noop});

                expect(actionableItem.find('.actionable-item-content').hasClass('cursor-pointer')).toBe(true);
            });

            it('should be possible to add a class on the container via the containerClassName prop', () => {
                const expectedContainerClass = 'oxford-comma';
                shallowWithProps({id: 'someid', containerClassName: expectedContainerClass});

                expect(actionableItem.find('.actionable-item-content').hasClass(expectedContainerClass)).toBe(true);
            });

            it('should call the onItemClick method if passed as prop', () => {
                const props = {id: 'someid', onItemClick: jasmine.createSpy('onItemClick')};
                shallowWithProps(props);

                actionableItem.find('.actionable-item-content').simulate('click');

                expect(props.onItemClick).toHaveBeenCalledTimes(1);
            });
        });
    });
});
