import {ShallowWrapper} from 'enzyme';
import {shallowWithState} from 'enzyme-redux';
import * as moment from 'moment';
import * as React from 'react';
import * as _ from 'underscore';
import {DateTooltip, DateTooltipsProps} from '../DateTooltip';
import {Tooltip} from '../Tooltip';

describe('Tooltip', () => {
    let tooltipWrapper: ShallowWrapper<DateTooltipsProps>;
    const TOOLTIP_PROPS: DateTooltipsProps = {
        date: moment(),
    };
    const isoDate = moment().format();
    const stringFormat = 'LLL';

    describe('<DateTooltip />', () => {
        beforeEach(() => {
            tooltipWrapper = shallowWithState(<DateTooltip {...TOOLTIP_PROPS} />, {});
        });

        it('should display a tooltip', () => {
            expect(tooltipWrapper.find(Tooltip).length).toBe(1);
        });

        it('should display content in ISO-8601 if no format is given on moment date', () => {
            expect(tooltipWrapper.find(Tooltip).props().title).toEqual(isoDate);
        });

        it('should display the tooltip in the given tooltipformat', () => {
            const newProps: DateTooltipsProps = _.extend({}, TOOLTIP_PROPS, {tooltipFormat: stringFormat});
            tooltipWrapper.setProps(newProps);
            expect(tooltipWrapper.find(Tooltip).props().title).toEqual(moment(isoDate).format(stringFormat));
        });

        it('should display the children of the tooltip in the given format', () => {
            const newProps: DateTooltipsProps = _.extend({}, TOOLTIP_PROPS, {format: stringFormat});
            tooltipWrapper.setProps(newProps);
            expect(tooltipWrapper.find(Tooltip).props().children).toEqual(moment(isoDate).format(stringFormat));
        });
    });
});
