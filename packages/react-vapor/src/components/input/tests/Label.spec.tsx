import {shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Label} from '../Label';

describe('Label', () => {
    describe('<Label />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(<Label />);
            }).not.toThrow();
        });
    });

    describe('<Label />', () => {
        it('should set inner label classes when specified', () => {
            const innerLabelClass = 'valid';
            const classesTest = [innerLabelClass];
            const label = shallow(<Label classes={classesTest} />);
            expect(label.find('label').hasClass(innerLabelClass)).toBe(true);
        });

        it('should set inner label valid message when specified', () => {
            const message = 'salut';
            const label = shallow(<Label data-valid-message={message} />);
            expect(label.find('label').prop('data-valid-message')).toBe(message);
        });

        it('should set inner label invalid message when specified', () => {
            const message = 'salut';
            const label = shallow(<Label data-invalid-message={message} />);
            expect(label.find('label').prop('data-invalid-message')).toBe(message);
        });

        it('should pass down any other attribute to the underlying label tag', () => {
            const expectedSelector = 'Thon';
            const label = shallow(<Label data-whatever={expectedSelector} />);
            expect(label.find('label').prop('data-whatever')).toBe(expectedSelector);
        });
    });
});
