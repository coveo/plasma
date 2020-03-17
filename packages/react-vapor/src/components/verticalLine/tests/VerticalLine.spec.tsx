import {shallow} from 'enzyme';
import * as React from 'react';
import {VerticalLine} from '../VerticalLine';

describe('VerticalLine', () => {
    it('should render without error in various scenarios', () => {
        expect(() => shallow(<VerticalLine />)).not.toThrow();
        expect(() => shallow(<VerticalLine className="testClass" />)).not.toThrow();
    });

    it('should render with default classes by default', () => {
        expect(
            shallow(<VerticalLine />)
                .find('span')
                .prop('className')
        ).toBe(VerticalLine.defaultClassName);
    });

    it('should add className to default className if some are passed', () => {
        const testClasses = 'we are five custom classes';
        const className = shallow(<VerticalLine className={testClasses} />)
            .find('span')
            .prop('className');

        expect(className).toContain(testClasses);
        expect(className).toContain(VerticalLine.defaultClassName);
    });
});
