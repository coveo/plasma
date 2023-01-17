import {shallowWithState} from '@test-utils';

import {BlankSlateWithTable} from '../BlankSlatesHOC.js';

describe('BlankSlateWithTable Tests', () => {
    describe('<BlankSlateWithTable>', () => {
        const defaultProps = {
            title: 'test',
        };

        it('should not throw on mount and unmount', () => {
            expect(() => {
                const component = shallowWithState(<BlankSlateWithTable {...defaultProps} />, {});
                component.unmount();
            }).not.toThrow();
        });

        describe('once mounted', () => {
            it('should render the colSpan with 20 on td by default', () => {
                const component = shallowWithState(<BlankSlateWithTable {...defaultProps} />, {});

                expect(component.find('td').props().colSpan).toBe(20);
            });

            it('should render the colSpan set by the numberOfColumn', () => {
                const component = shallowWithState(<BlankSlateWithTable {...defaultProps} numberOfColumn={2} />, {});

                expect(component.find('td').props().colSpan).toBe(2);
            });
        });
    });
});
