import moment from 'moment';
import {DateUtils} from './DateUtils';

describe('DateUtils', () => {
    describe('getValidDate', () => {
        it('should return a valid formatted date if the format is MMM DD, YYYY, H:mm', () => {
            const date = 'Jan 02, 2010, 22:21';
            expect(DateUtils.getValidDate(date).toString()).toContain('Sat Jan 02 2010 22:21:00 GMT');
        });

        it('should return the date from now if YYYY-MM-DD HH:mm and YYYY-MM-DD H:mm date format is invalid', () => {
            const date = 'not a date';
            expect(DateUtils.getValidDate(date).toString()).toBe(
                moment()
                    .toDate()
                    .toString()
            );
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
            const current = moment()
                .startOf('minute')
                .add(10, 'seconds'); // This makes sure that subtracting a second won't change the minute
            expect(DateUtils.isDifferent(moment(current).subtract(1, 'second'), current, 'minute')).toBe(
                false,
                'subtracting a second'
            );
            expect(DateUtils.isDifferent('2018-01-01', '2018-12-31', 'year')).toBe(false, 'year');
        });

        it('should return true when passing different moments', () => {
            expect(DateUtils.isDifferent(moment(), null)).toBe(true);
            expect(DateUtils.isDifferent(null, moment())).toBe(true);
            expect(DateUtils.isDifferent(moment(), moment().add(1, 'day'))).toBe(true);
            expect(DateUtils.isDifferent(moment().subtract(1, 'second'), moment())).toBe(true);
            expect(DateUtils.isDifferent('2018-01-01', '2018-12-31')).toBe(true);
        });
    });
});
