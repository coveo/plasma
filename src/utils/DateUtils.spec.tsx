import { DateUtils } from './DateUtils';
import * as moment from 'moment';

describe('DateUtils', () => {

  describe('getValidDate', () => {

    it('should return a valid formatted date if the format is YYYY-MM-DD HH:mm', () => {
      const date = '2010-01-02 22:21';
      expect(DateUtils.getValidDate(date).toString()).toContain('Sat Jan 02 2010 22:21:00 GMT');
    });

    it('should return a valid formatted date if the format is YYYY-MM-DD H:mm', () => {
      const date = '2010-01-02 2:21';
      expect(DateUtils.getValidDate(date).toString()).toContain('Sat Jan 02 2010 02:21:00 GMT');
    });

    it('should return the date from now if YYYY-MM-DD HH:mm and YYYY-MM-DD H:mm date format is invalid', () => {
      const date = 'not a date';
      expect(DateUtils.getValidDate(date).toString()).toBe(moment().toDate().toString());
    });
  });
});
