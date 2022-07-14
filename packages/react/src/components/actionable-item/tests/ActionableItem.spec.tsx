import {shallow, ShallowWrapper} from 'enzyme';
import {shallowWithStore} from '@test-utils';
import {ReactNode, ReactElement} from 'react';
import {Store} from 'redux';
import * as _ from 'underscore';
import {render, screen} from '@test-utils';

import {PlasmaState} from '../../../PlasmaState';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {Drop} from '../../drop/Drop';
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
        let store: Store<PlasmaState>;

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
        });

        const shallowWithProps = (props: Partial<IActionableItemProps> = basicProps, children: ReactNode = '') => {
            actionableItem = shallowWithStore(
                <ActionableItem {...basicProps} {...props}>
                    {children}
                </ActionableItem>,
                store,
                false
            );
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
                const children = <div className="children">hello world</div>;
                render(<ActionableItem {...basicProps}>{children}</ActionableItem>);

                expect(screen.getByText('hello world')).toBeVisible();
            });

            it('should not highlight dropdown options', () => {
                const children = <div className="children">hello world</div>;
                render(<ActionableItem {...basicProps}>{children}</ActionableItem>);

                expect(screen.getByText('some action')).not.toHaveClass('active');
            });

            it('should render the moreAppend svg in the Drop', () => {
                shallowWithProps();

                const renderButton: () => ReactElement = actionableItem.find(Drop).prop('renderOpenButton') as any;
                const button = shallow(renderButton());

                expect(button.find(Svg).prop('svgName')).toBe('moreAppend');
            });

            it('should not render a Drop if there is no actions', () => {
                shallowWithProps({id: 'mountwithnoactions', actions: []});

                expect(actionableItem.find(Drop).length).toBe(0);
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
                const props = {id: 'someid', onItemClick: jest.fn()};
                shallowWithProps(props);

                actionableItem.find('.actionable-item-content').simulate('click');

                expect(props.onItemClick).toHaveBeenCalledTimes(1);
            });
        });
    });
});
