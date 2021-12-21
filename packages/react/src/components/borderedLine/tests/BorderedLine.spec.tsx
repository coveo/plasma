import {shallow} from 'enzyme';
import * as React from 'react';
import {BorderedLine} from '../BorderedLine';

describe('BorderedLine', () => {
    it('should render without error in various scenarios', () => {
        expect(() => shallow(<BorderedLine />)).not.toThrow();
        expect(() => shallow(<BorderedLine>hello</BorderedLine>)).not.toThrow();
        expect(() => shallow(<BorderedLine className="testClass">hello</BorderedLine>)).not.toThrow();
    });

    it('should render with default classes by default', () => {
        expect(
            shallow(<BorderedLine />)
                .find('div')
                .prop('className')
        ).toBe(BorderedLine.defaultClassName);
    });

    it('should add className to default className if some are passed', () => {
        const testClasses = 'we are five custom classes';
        const className = shallow(<BorderedLine className={testClasses} />)
            .find('div')
            .prop('className');

        expect(className).toContain(testClasses);
        expect(className).toContain(BorderedLine.defaultClassName);
    });
});
