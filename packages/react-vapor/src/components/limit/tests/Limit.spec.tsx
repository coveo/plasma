import {mount, ReactWrapper, shallow} from 'enzyme';
import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {Provider} from 'react-redux';
import {InputConnected} from 'react-vapor';
import {any} from 'underscore';
import _ from 'underscore';
import {clearState} from '../../../utils';
import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {Limit, LimitDisconnect, LimitProps} from '../Limit';

describe('Limit', () => {
    let limit: ReactWrapper<LimitProps, any>;
    let limitDisconnect: ReactWrapper<LimitProps, any>;
    let store: ReactVaporMockStore;
    const bufferCurrentLimit = '100';
    const bufferFunction = () => any;
    const anyId = 'limit1';
    const anyTitle = 'test limit';
    const anyUsage = 33;

    beforeEach(() => {
        store = getStoreMock();
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    const defaultProps: LimitProps = {
        id: anyId,
        title: anyTitle,
        currentLimit: bufferCurrentLimit,
        onChangeLimit: bufferFunction,
    };

    it('should render without errors when disconnected', () => {
        expect(() => {
            shallow(<LimitDisconnect {...defaultProps} />);
        }).not.toThrow();
    });

    it('should unMount without errors when disconnected', () => {
        const wrapper = shallow(<LimitDisconnect {...defaultProps} />);
        expect(() => {
            wrapper.unmount();
        }).not.toThrow();
    });

    it('should render without errors when connected', () => {
        expect(() => {
            shallowWithStore(<Limit {...defaultProps} />, store).dive();
        }).not.toThrow();
    });

    it('should unMount without errors when connected', () => {
        const wrapper = shallowWithStore(<Limit {...defaultProps} />, store).dive();
        expect(() => {
            wrapper.unmount();
        }).not.toThrow();
    });

    describe('once mounted, but disconnect', () => {
        beforeEach(() => {
            limitDisconnect = mount(<LimitDisconnect {...defaultProps} />, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
            limitDisconnect.detach();
        });

        it('should display the custom limit label if the limitLabel prop is specified', () => {
            const expectedCustomTitle: string = 'Throttling limit';
            limitDisconnect.setProps({limitLabel: expectedCustomTitle});
            expect(
                limitDisconnect
                    .find('.limit-box-limit')
                    .find('label')
                    .text()
            ).toBe(expectedCustomTitle);
        });

        it('should display the default limit label if the limitLabel prop is not specified', () => {
            const expectedDefaultLimitTitle: string = Limit.defaultProps.limitLabel;
            expect(
                limitDisconnect
                    .find('.limit-box-limit')
                    .find('label')
                    .text()
            ).toBe(expectedDefaultLimitTitle);
        });

        it('should display the <div class="limit-box-usage"> if the usage prop is specified', () => {
            const expectedIsLimitBoxUsageDivIsPresent: boolean = true;
            limitDisconnect.setProps({usage: anyUsage});

            expect(limitDisconnect.exists('.limit-box-usage')).toBe(expectedIsLimitBoxUsageDivIsPresent);
        });

        it('should not display the <div class="limit-box-usage"> if the usage prop is not specified', () => {
            const expectedIsLimitBoxUsageDivIsPresent: boolean = false;

            expect(limitDisconnect.exists('.limit-box-usage')).toBe(expectedIsLimitBoxUsageDivIsPresent);
        });

        it('should display the usage value if the usage prop is specified', () => {
            const expectedUsage: number = anyUsage;
            limitDisconnect.setProps({usage: expectedUsage});

            expect(limitDisconnect.find('.limit-box-usage-value').text()).toBe(expectedUsage.toString());
        });

        it('should display the custom limit value if the limit prop is specified', () => {
            const expectedCustomLimit: number = 130;
            limitDisconnect.setProps({limit: expectedCustomLimit});

            expect(limitDisconnect.find('.limit-box-limit-value').text()).toBe(expectedCustomLimit.toString());
        });

        it('should display the default limit value if the limit prop is not specified', () => {
            const expectedDefaultLimit: number = Limit.defaultProps.limit;

            expect(limitDisconnect.find('.limit-box-limit-value').text()).toBe(expectedDefaultLimit.toString());
        });

        it('should render a <span class="limit-box-limit-value"> tag to display the limit value if the limit is not editable', () => {
            const expectedIsLimitBoxLimitValueClassIsPresent: boolean = true;

            expect(limitDisconnect.exists('.limit-box-limit-value')).toBe(expectedIsLimitBoxLimitValueClassIsPresent);
        });

        it('should include the class "mod-green" in the progress bar if the isLimitTheGoalToReach prop is true', () => {
            const expectedIsModGreenClassPresent: boolean = true;
            limitDisconnect.setProps({isLimitTheGoalToReach: true, usage: anyUsage});

            expect(limitDisconnect.find('.limit-box-bar').hasClass('mod-green')).toBe(expectedIsModGreenClassPresent);
        });

        it('should not include the class "mod-green" in the progress bar if the isLimitTheGoalToReach prop is false', () => {
            const expectedIsModGreenClassPresent: boolean = false;
            limitDisconnect.setProps({usage: anyUsage});

            expect(limitDisconnect.find('.limit-box-bar').hasClass('mod-green')).toBe(expectedIsModGreenClassPresent);
        });

        it('should display the progress-bar based on the percentage by usage at the given limit', () => {
            const expectedPercentage: number = Math.round((anyUsage / Limit.defaultProps.limit) * 100);
            const expectedProgressBarClassName: string = `progress-${expectedPercentage.toString()}`;
            limitDisconnect.setProps({usage: anyUsage});

            expect(limitDisconnect.find('.limit-box-bar').hasClass(expectedProgressBarClassName)).toBe(true);
        });

        it('should not display a progress-bar if there is not an usage assigned', () => {
            const expectedIsProgressBarDisplayed: boolean = false;

            expect(limitDisconnect.exists('.limit-box-bar')).toBe(expectedIsProgressBarDisplayed);
        });

        it('should display a progress-bar if there is an usage assigned', () => {
            const expectedIsProgressBarDisplayed: boolean = true;
            limitDisconnect.setProps({usage: anyUsage});

            expect(limitDisconnect.exists('.limit-box-bar')).toBe(expectedIsProgressBarDisplayed);
        });

        it('should display the history icon if the isHistoryIncluded prop value is true', () => {
            const expectedIsHistoryIconDisplayed: boolean = true;
            limitDisconnect.setProps({isHistoryIncluded: true});

            expect(limitDisconnect.exists('.limit-history-button')).toBe(expectedIsHistoryIconDisplayed);
        });

        it('should not display the history icon if the isHistoryIncluded prop value is false', () => {
            const expectedIsHistoryIconDisplayed: boolean = false;

            expect(limitDisconnect.exists('.limit-history-button')).toBe(expectedIsHistoryIconDisplayed);
        });
    });
    describe('once mounted and connected', () => {
        const limitEditableProps: LimitProps = {
            id: anyId,
            title: anyTitle,
            usage: anyUsage,
            currentLimit: Limit.defaultProps.limit.toString(),
            onChangeLimit: bufferFunction,
            isLimitEditable: true,
        };

        beforeEach(() => {
            limit = mount(
                <Provider store={store}>
                    <Limit {...limitEditableProps} />
                </Provider>,
                {attachTo: document.getElementById('App')}
            );
        });

        afterEach(() => {
            limit.detach();
        });

        it('should contains an InputConnected if limit is editable', () => {
            expect(limit.find(InputConnected).length).toEqual(1);
        });

        it('should add the input in the store when limit is editable', () => {
            const expectedStoreAction = 'ADD_INPUT';
            expect(store.getActions().length).toBe(1);
            expect(store.getActions()[0].type).toBe(expectedStoreAction);
        });

        it('should change the input value in the store when the current limit is changed', () => {
            const newCurrentLimit = '150';
            const expectedStoreAction = 'CHANGE_VALUE_INPUT';
            const input = limit.find(InputConnected);
            input.props().onChange(newCurrentLimit);

            expect(store.getActions()[1].type).toBe(expectedStoreAction);
        });
    });
});
