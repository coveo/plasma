import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

import {Limit, LimitProps} from '../Limit';

describe('Limit', () => {
    let limit: ReactWrapper<LimitProps, any>;

    const defaultProps: LimitProps = {
        title: 'test limit',
    };

    it('should render without errors', () => {
        expect(() => {
            shallow(<Limit {...defaultProps} />);
        }).not.toThrow();
    });

    it('should unMount without errors', () => {
        const wrapper = shallow(<Limit {...defaultProps} />);
        expect(() => {
            wrapper.unmount();
        }).not.toThrow();
    });

    describe('once mounted', () => {
        beforeEach(() => {
            limit = mount(<Limit {...defaultProps} />, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
            limit.detach();
        });

        it('should display the custom limit label if the limitLabel prop is specified', () => {
            const expectedCustomTitle: string = 'Throttling limit';
            limit.setProps({limitLabel: expectedCustomTitle});
            expect(
                limit
                    .find('.limit-box-limit')
                    .find('label')
                    .text()
            ).toBe(expectedCustomTitle);
        });

        it('should display the default limit label if the limitLabel prop is not specified', () => {
            const expectedDefaultLimitTitle: string = Limit.defaultProps.limitLabel;
            expect(
                limit
                    .find('.limit-box-limit')
                    .find('label')
                    .text()
            ).toBe(expectedDefaultLimitTitle);
        });

        it('should display the <div class="limit-box-usage"> if the usageNumber prop is specified', () => {
            const expectedIsLimitBoxUsageDivIsPresent: boolean = true;
            const anyUsageNumber: number = 33;
            limit.setProps({usageNumber: anyUsageNumber});

            expect(limit.exists('.limit-box-usage')).toBe(expectedIsLimitBoxUsageDivIsPresent);
        });

        it('should not display the <div class="limit-box-usage"> if the usageNumber prop is not specified', () => {
            const expectedIsLimitBoxUsageDivIsPresent: boolean = false;

            expect(limit.exists('.limit-box-usage')).toBe(expectedIsLimitBoxUsageDivIsPresent);
        });

        it('should display the usage number value if the usageNumber prop is specified', () => {
            const expectedUsageNumber: number = 33;
            limit.setProps({usageNumber: expectedUsageNumber});

            expect(limit.find('.limit-box-usage-value').text()).toBe(expectedUsageNumber.toString());
        });

        it('should display the custom limit number value if the limitNumber prop is specified', () => {
            const expectedCustomLimitNumber: number = 130;
            limit.setProps({limitNumber: expectedCustomLimitNumber});

            expect(limit.find('.limit-box-limit-value').text()).toBe(expectedCustomLimitNumber.toString());
        });

        it('should display the default limit number value if the limitNumber prop is not specified', () => {
            const expectedDefaultLimitNumber: number = Limit.defaultProps.limitNumber;

            expect(limit.find('.limit-box-limit-value').text()).toBe(expectedDefaultLimitNumber.toString());
        });

        it('should render a <span class="limit-box-limit-value"> tag to display the limit value if the limit is not modifiable', () => {
            const expectedIsLimitBoxLimitValueClassIsPresent: boolean = true;

            expect(limit.exists('.limit-box-limit-value')).toBe(expectedIsLimitBoxLimitValueClassIsPresent);
        });

        it('should not render a <span class="limit-box-limit-value"> tag to display the limit value if the limit is modifiable', () => {
            const expectedIsLimitBoxLimitValueClassIsPresent: boolean = false;
            limit.setProps({isLimitModifiable: true});

            expect(limit.exists('.limit-box-limit-value')).toBe(expectedIsLimitBoxLimitValueClassIsPresent);
        });

        it('should render a type "number" input with input default value as the limit number and the input label as the limit label if the limit value is modifiable', () => {
            const expectedIsInputPresent: boolean = true;
            const expectedInputType: string = 'number';
            const aCustomLimitValue: number = 130;
            const expectedInputDefaultValue: string = aCustomLimitValue.toString();
            const expectedInputLabel: string = 'limit modifiable';
            limit.setProps({isLimitModifiable: true, limitNumber: aCustomLimitValue, limitLabel: expectedInputLabel});

            expect(limit.find('.limit-box-limit').exists('input')).toBe(expectedIsInputPresent);

            expect(
                limit
                    .find('.limit-box-limit')
                    .find('input') // Input
                    .props().type
            ).toBe(expectedInputType);

            expect(
                limit
                    .find('.limit-box-limit')
                    .find('input')
                    .props().defaultValue
            ).toBe(expectedInputDefaultValue);

            expect(
                limit
                    .find('.limit-box-limit')
                    .find('label')
                    .text()
            ).toBe(expectedInputLabel);
        });

        it('should include the class "mod-green" in the progress bar if the isLimitTheGoalToReach prop is true', () => {
            const expectedIsModGreenClassPresent: boolean = true;
            const anyUsageNumber: number = 33;
            limit.setProps({isLimitTheGoalToReach: true, usageNumber: anyUsageNumber});

            expect(limit.find('.limit-box-bar').hasClass('mod-green')).toBe(expectedIsModGreenClassPresent);
        });

        it('should not include the class "mod-green" in the progress bar if the isLimitTheGoalToReach prop is false', () => {
            const expectedIsModGreenClassPresent: boolean = false;
            const anyUsageNumber: number = 33;
            limit.setProps({usageNumber: anyUsageNumber});

            expect(limit.find('.limit-box-bar').hasClass('mod-green')).toBe(expectedIsModGreenClassPresent);
        });

        it('should display the progress-bar based on the percentage by usage at the given limit', () => {
            const anUsageNumber: number = 33;
            const expectedPercentage: number = Math.round((anUsageNumber / Limit.defaultProps.limitNumber) * 100);
            const expectedProgressBarClassName: string = 'progress-' + expectedPercentage.toString();
            limit.setProps({usageNumber: anUsageNumber});

            expect(limit.find('.limit-box-bar').hasClass(expectedProgressBarClassName)).toBe(true);
        });

        it('should not display a progress-bar if there is not an usage number assigned', () => {
            const expectedIsProgressBarDisplayed: boolean = false;

            expect(limit.exists('.limit-box-bar')).toBe(expectedIsProgressBarDisplayed);
        });

        it('should display a progress-bar if there is an usage number assigned', () => {
            const expectedIsProgressBarDisplayed: boolean = true;
            const anyUsageNumber: number = 33;
            limit.setProps({usageNumber: anyUsageNumber});

            expect(limit.exists('.limit-box-bar')).toBe(expectedIsProgressBarDisplayed);
        });

        it('should display the history icon if the isHistoryIncluded prop value is true', () => {
            const expectedIsHistoryIconDisplayed: boolean = true;
            limit.setProps({isHistoryIncluded: true});

            expect(limit.exists('.limit-history-button')).toBe(expectedIsHistoryIconDisplayed);
        });

        it('should not display the history icon if the isHistoryIncluded prop value is false', () => {
            const expectedIsHistoryIconDisplayed: boolean = false;

            expect(limit.exists('.limit-history-button')).toBe(expectedIsHistoryIconDisplayed);
        });
    });
});
