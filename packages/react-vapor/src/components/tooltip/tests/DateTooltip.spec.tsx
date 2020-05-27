import {shallow, ShallowWrapper} from 'enzyme';
import moment from 'moment';
import * as React from 'react';
import * as _ from 'underscore';
import {DateTooltip, DateTooltipsProps} from '../DateTooltip';
import {Tooltip} from '../Tooltip';

describe('Tooltip', () => {
    let tooltipWrapper: ShallowWrapper<DateTooltipsProps>;
    const defaultDate = '1995-12-25';
    const defaultFormat = moment(defaultDate).format('LLL');
    const stringFormat = 'ddd, hA';

    describe('<DateTooltip />', () => {
        it('should display a tooltip', () => {
            tooltipWrapper = shallow(<DateTooltip date={moment()} />);
            expect(tooltipWrapper.find(Tooltip).length).toBe(1);
        });

        it('should display content in LLL if no format is given on moment date', () => {
            tooltipWrapper = shallow(<DateTooltip date={moment(defaultDate)} />);
            expect(tooltipWrapper.find(Tooltip).props().title).toEqual(defaultFormat);
        });

        it('should display the tooltip in the given tooltipformat', () => {
            tooltipWrapper = shallow(<DateTooltip date={moment(defaultDate)} tooltipFormat={stringFormat} />);
            expect(tooltipWrapper.find(Tooltip).props().title).toEqual(moment(defaultFormat).format(stringFormat));
        });

        it('should display the children of the tooltip in the given format', () => {
            tooltipWrapper = shallow(<DateTooltip date={moment(defaultDate)} format={stringFormat} />);
            expect(tooltipWrapper.find(Tooltip).props().children).toEqual(moment(defaultFormat).format(stringFormat));
        });
    });
});
