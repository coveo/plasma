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

        const mountWithProps = (props: Partial<IActionableItemProps> = basicProps, children: React.ReactNode = '') => {
            actionableItem = shallowWithStore(<ActionableItem {...basicProps} {...props}>{children}</ActionableItem>, store);
        };

        it('should mount without error', () => {
            expect(() => mountWithProps()).not.toThrow();
            expect(() => mountWithProps(undefined, <div>hello world</div>)).not.toThrow();
        });

        describe('after mount', () => {
            beforeEach(() => {
                mountWithProps();
            });

            it('should render the children in the actionable-item-content container', () => {
                const children = <div className='children'>hello world</div>;
                mountWithProps(undefined, children);

                expect(actionableItem.find('.actionable-item-content').find('.children').length).toBe(1);
            });

            it('should render the more-append svg in the actionable-item-dots container', () => {
                mountWithProps();

                expect(actionableItem.find('.actionable-item-dots').find(Svg).prop('svgName')).toBe('more-append');
            });

            it('should not render the more-append svg in the actionable-item-dots container if no actions', () => {
                mountWithProps({id: 'mountwithnoactions', actions: []});

                expect(actionableItem.find('.actionable-item-dots').find(Svg).length).toBe(0);
            });

            it('should render the actions in a list-box', () => {
                mountWithProps();

                // React-Tether renders the attached element to the body of the page, thus we need to start from there
                expect(actionableItem.find(ListBox).exists()).toBe(true);
            });

            it('should not have the cursor-pointer class if onItemClick is not passed as prop', () => {
                mountWithProps();

                expect(actionableItem.find('.actionable-item-content').hasClass('cursor-pointer')).toBe(false);
            });

            it('should have the cursor-pointer class if onItemClick is passed as prop', () => {
                mountWithProps({id: 'someid', onItemClick: _.noop});

                expect(actionableItem.find('.actionable-item-content').hasClass('cursor-pointer')).toBe(true);
            });

            it('should have the cursor-pointer class if onItemClick is passed as prop', () => {
                const expectedContainerClass = 'oxford-comma';
                mountWithProps({id: 'someid', containerClassName: expectedContainerClass});

                expect(actionableItem.find('.actionable-item-content').hasClass(expectedContainerClass)).toBe(true);
            });

            it('should call the onItemClick method if passed as prop', () => {
                const props = {id: 'someid', onItemClick: jasmine.createSpy('onItemClick')};
                mountWithProps(props);

                actionableItem.find('.actionable-item-content').simulate('click');

                expect(props.onItemClick).toHaveBeenCalledTimes(1);
            });
        });
    });
});
