import {shallow} from 'enzyme';
import * as React from 'react';
import {Separator} from '../Separator';

describe('Separator', () => {
    it('should render without error in various scenarios', () => {
        expect(() => shallow(<Separator />)).not.toThrow();
        expect(() => shallow(<Separator className="testClass" />)).not.toThrow();
    });

    it('should render with default classes by default', () => {
        expect(
            shallow(<Separator />)
                .find('span')
                .prop('className')
        ).toBe(Separator.defaultClassName);
    });

    it('should add className to default className if some are passed', () => {
        const testClasses = 'we are five custom classes';
        const className = shallow(<Separator className={testClasses} />)
            .find('span')
            .prop('className');

        expect(className).toContain(testClasses);
        expect(className).toContain(Separator.defaultClassName);
    });
});
