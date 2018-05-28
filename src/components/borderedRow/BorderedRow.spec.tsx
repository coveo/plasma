import {shallow} from 'enzyme';
import * as React from 'react';
import {BorderedRow} from './BorderedRow';

describe('BorderedRow', () => {
    it('should render without error in various scenarios', () => {
        expect(() => shallow(<BorderedRow />)).not.toThrow();
        expect(() => shallow(<BorderedRow>hello</BorderedRow>)).not.toThrow();
        expect(() => shallow(<BorderedRow className='testClass'>hello</BorderedRow>)).not.toThrow();
    });

    it('should render with default classes by default', () => {
        expect(shallow(<BorderedRow />).find('div').prop('className'))
            .toBe(BorderedRow.defaultClassName);
    });

    it('should add className to default className if some are passed', () => {
        const testClasses = 'we are five custom classes';
        const className = shallow(<BorderedRow className={testClasses} />).find('div').prop('className');

        expect(className).toContain(testClasses);
        expect(className).toContain(BorderedRow.defaultClassName);
    });
});
