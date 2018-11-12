import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {Svg} from '../../svg/Svg';
import {ActionableItem, IActionableItemProps} from '../ActionableItem';

describe('ActionableItem', () => {
    const basicProps: IActionableItemProps = {
        id: 'actionable-item',
        actions: [{value: 'some action'}],
    };
    let wrapper: ReactWrapper<IActionableItemProps>;
    let actionableItem: ReactWrapper<IActionableItemProps>;

    describe('<ActionableItem />', () => {
        let store: Store<IReactVaporState>;

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
        });

        const mountWithProps = (props: Partial<IActionableItemProps> = basicProps, children: React.ReactNode = '') => {
            wrapper = mount(
                <Provider store={store}>
                    <ActionableItem {...basicProps} {...props}>{children}</ActionableItem>
                </Provider>,
                {attachTo: document.getElementById('App')},
            );

            actionableItem = wrapper.find(ActionableItem);
        };

        it('should mount without error', () => {
            expect(() => mountWithProps()).not.toThrow();
            expect(() => mountWithProps(undefined, <div>hello world</div>)).not.toThrow();
        });

        describe('after mount', () => {
            beforeEach(() => {
                mountWithProps();

            });

            afterEach(() => {
                wrapper.unmount();
                wrapper.detach();
            });

            it('should get the props correctly', () => {
                mountWithProps(basicProps);

                expect(actionableItem.props().actions).toEqual(basicProps.actions);
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
                expect(document.querySelector('body').querySelector('.actionable-item-element').querySelector('.list-box').innerHTML)
                    .toContain(basicProps.actions[0].value);
            });
        });
    });
});
