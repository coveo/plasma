import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import {TextLoadingPlaceholder} from '../TextLoadingPlaceholder';

describe('TextLoadingPlaceholder tests', () => {
    describe('<TextLoadingPlaceholder />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallowWithState(<TextLoadingPlaceholder />, {});
                wrapper.unmount();
            });
        });

        it('should not have class by default', () => {
            const wrapper = shallowWithState(<TextLoadingPlaceholder />, {});
            expect(wrapper.hasClass('mod-small')).toBe(false);
            expect(wrapper.hasClass('mod-word')).toBe(false);
            expect(wrapper.hasClass('mod-large')).toBe(false);
        });

        it('should add mod-small with small as prop', () => {
            const wrapper = shallowWithState(<TextLoadingPlaceholder small />, {});
            expect(wrapper.hasClass('mod-small')).toBe(true);
        });

        it('should add mod-word with word as prop', () => {
            const wrapper = shallowWithState(<TextLoadingPlaceholder word />, {});
            expect(wrapper.hasClass('mod-word')).toBe(true);
        });

        it('should add mod-large with large as prop', () => {
            const wrapper = shallowWithState(<TextLoadingPlaceholder large />, {});
            expect(wrapper.hasClass('mod-large')).toBe(true);
        });
    });
});
