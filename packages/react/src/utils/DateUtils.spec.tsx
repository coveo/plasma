import moment from 'moment';
import {IRangeLimit} from '../components.js';
import {DateUtils} from './DateUtils.js';

describe('DateUtils', () => {
    describe('currentDate', () => {
        it('returns the current system date', () => {
            jest.useFakeTimers();

            const expectedDate1 = new Date(2022, 0, 1);
            const expectedDate2 = new Date(2002, 2, 22);

            jest.setSystemTime(expectedDate1);

            expect(DateUtils.currentDate).toStrictEqual(expectedDate1);

            jest.setSystemTime(expectedDate2);

            expect(DateUtils.currentDate).toStrictEqual(expectedDate2);

            jest.useRealTimers();
        });
    });
    describe('currentMonth', () => {
        it('returns the current system month', () => {
            jest.useFakeTimers();

            const expectedDate1 = new Date(2022, 0, 1);
            const expectedDate2 = new Date(2002, 2, 22);

            jest.setSystemTime(expectedDate1);

            expect(DateUtils.currentMonth).toBe(0);

            jest.setSystemTime(expectedDate2);

            expect(DateUtils.currentMonth).toBe(2);

            jest.useRealTimers();
        });
    });
    describe('currentYear', () => {
        it('returns the current system year', () => {
            jest.useFakeTimers();

            const expectedDate1 = new Date(2022, 0, 1);
            const expectedDate2 = new Date(2002, 2, 22);

            jest.setSystemTime(expectedDate1);

            expect(DateUtils.currentYear).toBe(2022);

            jest.setSystemTime(expectedDate2);

            expect(DateUtils.currentYear).toBe(2002);

            jest.useRealTimers();
        });
    });

    describe('getValidDate', () => {
        it('should return a valid formatted date if the format is MMM DD, YYYY, H:mm', () => {
            const date = 'Jan 02, 2010, 22:21';

            expect(DateUtils.getValidDate(date).toString()).toContain('Sat Jan 02 2010 22:21:00 GMT');
        });

        it('should return the date from now if YYYY-MM-DD HH:mm and YYYY-MM-DD H:mm date format is invalid', () => {
            const date = 'not a date';

            expect(DateUtils.getValidDate(date).toString()).toBe(moment().toDate().toString());
        });
    });

    describe('isDifferent', () => {
        it('should return false when passing null and null', () => {
            expect(DateUtils.isDifferent(null, null)).toBe(false);
            expect(DateUtils.isDifferent(null, null, 'minutes')).toBe(false);
            expect(DateUtils.isDifferent(null, null, 'days')).toBe(false);
        });

        it('should return false when passing undefined and undefined', () => {
            expect(DateUtils.isDifferent(undefined, undefined)).toBe(false);
            expect(DateUtils.isDifferent(undefined, undefined, 'minutes')).toBe(false);
            expect(DateUtils.isDifferent(undefined, undefined, 'days')).toBe(false);
        });

        it('should return false when passing both empty strings', () => {
            expect(DateUtils.isDifferent('', '')).toBe(false);
            expect(DateUtils.isDifferent('', '', 'minutes')).toBe(false);
            expect(DateUtils.isDifferent('', '', 'days')).toBe(false);
        });

        it('should return false when passing similar moments for the given granularity', () => {
            const current = moment().startOf('minute').add(10, 'seconds');

            expect(DateUtils.isDifferent(moment(current).subtract(1, 'second'), current, 'minute')).toBe(false);

            expect(DateUtils.isDifferent('2018-01-01', '2018-12-31', 'year')).toBe(false);
        });

        it('should return true when passing different moments', () => {
            expect(DateUtils.isDifferent(moment(), null)).toBe(true);
            expect(DateUtils.isDifferent(null, moment())).toBe(true);
            expect(DateUtils.isDifferent(moment(), moment().add(1, 'day'))).toBe(true);
            expect(DateUtils.isDifferent(moment().subtract(1, 'second'), moment())).toBe(true);
            expect(DateUtils.isDifferent('2018-01-01', '2018-12-31')).toBe(true);
        });
    });

    describe('convertRangeToMinutes', () => {
        it('returns 0 if the range value does not have any values set', () => {
            const emptyRange: IRangeLimit = {};

            expect(DateUtils.convertRangeToMinutes(emptyRange)).toBe(0);
        });

        it('returns the number of minutes based on the range value', () => {
            const rangeWithoutHours: IRangeLimit = {weeks: 2, days: 3, minutes: 10};
            const rangeWithoutWeeks: IRangeLimit = {days: 2, hours: 5, minutes: 16};

            const expectedNumberOfMinutesRangeWithoutHours = 2 * 10080 + 3 * 1440 + 10;
            const expectedNumberOfMinutesRangeWithoutWeeks = 2 * 1440 + 5 * 60 + 16;

            expect(DateUtils.convertRangeToMinutes(rangeWithoutHours)).toBe(expectedNumberOfMinutesRangeWithoutHours);
            expect(DateUtils.convertRangeToMinutes(rangeWithoutWeeks)).toBe(expectedNumberOfMinutesRangeWithoutWeeks);
        });
    });
});
