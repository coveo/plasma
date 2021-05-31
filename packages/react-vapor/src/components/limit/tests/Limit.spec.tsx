import {mount, ReactWrapper} from 'enzyme';
import {shallowWithStore} from '@helpers/enzyme-redux';
import * as React from 'react';
import {Provider} from 'react-redux';
import * as _ from 'underscore';

import {clearState} from '../../../utils';
import {getStoreMock} from '../../../utils/tests/TestUtils';
import {InputConnected} from '../../input';
import {Limit, LimitProps} from '../Limit';

describe('Limit', () => {
    let limit: ReactWrapper<LimitProps, any>;
    let store: ReturnType<typeof getStoreMock>;

    const anyCurrentLimit = 100;
    const bufferFunction = () => _.any;
    const anyId = 'limit1';
    const anyTitle = 'test limit';
    const anyUsage = 33;
    const customLimit = 130;
    const customLimitLabel: string = 'Throttling limit';

    const defaultProps: LimitProps = {
        id: anyId,
        title: anyTitle,
        currentLimit: anyCurrentLimit,
        onChangeLimit: bufferFunction,
    };
    const limitEditableProps: LimitProps = {
        ...defaultProps,
        usage: anyUsage,
        isLimitEditable: true,
    };
    const defaultPropsWithUsage: LimitProps = {...defaultProps, usage: anyUsage};
    const customLimitProps: LimitProps = {...defaultProps, limit: customLimit};
    const customTitleProps: LimitProps = {...defaultProps, limitLabel: customLimitLabel};
    const limitIsTheGoalProps: LimitProps = {...defaultProps, usage: anyUsage, isLimitTheGoalToReach: true};
    const limitPropsWithHistory: LimitProps = {...defaultProps, isHistoryIncluded: true};

    const mountLimitWithStore = (props: LimitProps) =>
        mount(
            <Provider store={store}>
                <Limit {...props} />
            </Provider>,
            {attachTo: document.getElementById('App')}
        );

    beforeEach(() => {
        store = getStoreMock();
    });

    afterEach(() => {
        store.dispatch(clearState());
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

    describe('once mounted,', () => {
        afterEach(() => {
            limit?.unmount();
        });

        it('should display the custom limit label if the limitLabel prop is specified', () => {
            limit = mountLimitWithStore(customTitleProps);

            expect(limit.find('.limit-box-limit').find('label').text()).toBe(customLimitLabel);
        });

        it('should display the default limit label if the limitLabel prop is not specified', () => {
            const expectedDefaultLimitTitle: string = 'Limit';
            limit = mountLimitWithStore(defaultProps);

            expect(limit.find('.limit-box-limit').find('label').text()).toBe(expectedDefaultLimitTitle);
        });

        it('should display the <div class="limit-box-usage"> if the usage prop is specified', () => {
            limit = mountLimitWithStore(defaultPropsWithUsage);

            expect(limit.exists('.limit-box-usage')).toBe(true);
        });

        it('should not display the <div class="limit-box-usage"> if the usage prop is not specified', () => {
            limit = mountLimitWithStore(defaultProps);

            expect(limit.exists('.limit-box-usage')).toBe(false);
        });

        it('should display the usage value if the usage prop is specified', () => {
            limit = mountLimitWithStore(defaultPropsWithUsage);

            expect(limit.find('.limit-box-usage-value').text()).toBe(anyUsage.toString());
        });

        it('should display the custom limit value if the limit prop is specified', () => {
            limit = mountLimitWithStore(customLimitProps);

            expect(limit.find('.limit-box-limit-value').text()).toBe(customLimit.toString());
        });

        it('should display the default limit value if the limit prop is not specified', () => {
            const expectedDefaultLimit: number = 100;
            limit = mountLimitWithStore(defaultProps);

            expect(limit.find('.limit-box-limit-value').text()).toBe(expectedDefaultLimit.toString());
        });

        it('should render a <span class="limit-box-limit-value"> tag to display the limit value if the limit is not editable', () => {
            limit = mountLimitWithStore(defaultProps);

            expect(limit.exists('.limit-box-limit-value')).toBe(true);
        });

        it('should include the class "mod-green" in the progress bar if the isLimitTheGoalToReach prop is true', () => {
            limit = mountLimitWithStore(limitIsTheGoalProps);

            expect(limit.find('.limit-box-bar').hasClass('mod-green')).toBe(true);
        });

        it('should not include the class "mod-green" in the progress bar if the isLimitTheGoalToReach prop is false', () => {
            limit = mountLimitWithStore(defaultPropsWithUsage);

            expect(limit.find('.limit-box-bar').hasClass('mod-green')).toBe(false);
        });

        it('should display the progress-bar based on the percentage by usage at the given limit', () => {
            const expectedPercentage: number = Math.round((anyUsage / 100) * 100);
            const expectedProgressBarClassName: string = `progress-${expectedPercentage.toString()}`;
            limit = mountLimitWithStore(defaultPropsWithUsage);

            expect(limit.find('.limit-box-bar').hasClass(expectedProgressBarClassName)).toBe(true);
        });

        it('should not display a progress-bar if there is not an usage assigned', () => {
            limit = mountLimitWithStore(defaultProps);

            expect(limit.exists('.limit-box-bar')).toBe(false);
        });

        it('should display a progress-bar if there is an usage assigned', () => {
            limit = mountLimitWithStore(defaultPropsWithUsage);

            expect(limit.exists('.limit-box-bar')).toBe(true);
        });

        it('should display the history icon if the isHistoryIncluded prop value is true', () => {
            limit = mountLimitWithStore(limitPropsWithHistory);

            expect(limit.exists('.limit-history-button')).toBe(true);
        });

        it('should not display the history icon if the isHistoryIncluded prop value is false', () => {
            limit = mountLimitWithStore(defaultProps);

            expect(limit.exists('.limit-history-button')).toBe(false);
        });
    });

    describe('once mounted and connected', () => {
        afterEach(() => {
            limit?.unmount();
        });

        it('should contains an input if limit is editable', () => {
            limit = mountLimitWithStore(limitEditableProps);

            expect(limit.find('input').exists()).toBe(true);
        });

        it('should add the input in the store when limit is editable', () => {
            limit = mountLimitWithStore(limitEditableProps);
            const expectedStoreAction = 'ADD_INPUT';

            expect(store.getActions().length).toBe(1);
            expect(store.getActions()[0].type).toBe(expectedStoreAction);
        });

        it('should change the input value in the store when the current limit is changed', () => {
            limit = mountLimitWithStore(limitEditableProps);
            const newCurrentLimit = '150';
            const expectedStoreAction = 'CHANGE_VALUE_INPUT';
            const input = limit.find(InputConnected);
            input.props().onChange(newCurrentLimit);

            expect(store.getActions()[1].type).toBe(expectedStoreAction);
        });
    });
});
