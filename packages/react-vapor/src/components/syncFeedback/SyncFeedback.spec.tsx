import {shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {each} from 'underscore';
import {SyncFeedback, SyncFeedbackState} from './SyncFeedback';

describe('<SyncFeedback>', () => {
    it('should render without errors', () => {
        expect(() => shallow(<SyncFeedback state={SyncFeedbackState.NONE} />)).not.toThrow();
        expect(() => shallow(<SyncFeedback state={SyncFeedbackState.SYNCING} />)).not.toThrow();
        expect(() => shallow(<SyncFeedback state={SyncFeedbackState.SUCCESS} />)).not.toThrow();
        expect(() => shallow(<SyncFeedback state={SyncFeedbackState.ERROR} />)).not.toThrow();
        expect(() => shallow(<SyncFeedback state={SyncFeedbackState.NONE} feedback="none" />)).not.toThrow();
        expect(() => shallow(<SyncFeedback state={SyncFeedbackState.SYNCING} feedback="Syncing" />)).not.toThrow();
        expect(() => shallow(<SyncFeedback state={SyncFeedbackState.SUCCESS} feedback="Success!" />)).not.toThrow();
        expect(() => shallow(<SyncFeedback state={SyncFeedbackState.ERROR} feedback="NOOOOO!!!!" />)).not.toThrow();
    });

    it('should be empty if the state is none', () => {
        const shallowed = shallow(<SyncFeedback state={SyncFeedbackState.NONE} />);
        const shallowedWithFeedback = shallow(<SyncFeedback state={SyncFeedbackState.NONE} feedback="Not empty" />);

        expect(shallowed.text()).toBe('');
        expect(shallowedWithFeedback.text()).toBe('');
    });

    it('should contain the exact text passed to feedback prop', () => {
        const expectedFeedback = 'this is the expected value';

        each([SyncFeedbackState.SYNCING, SyncFeedbackState.SUCCESS, SyncFeedbackState.ERROR], (state: string) => {
            const wrapper = shallow(<SyncFeedback state={state} feedback={expectedFeedback} />);
            expect(wrapper.find('.sync-feedback-text').length).toBe(1);
            expect(wrapper.find('.sync-feedback-text').text()).toBe(expectedFeedback);
        });
    });

    it('should have the mod-error class whent the state is ERROR', () => {
        const expectedClass = 'mod-error';
        const wrapper = shallow(<SyncFeedback state={SyncFeedbackState.ERROR} />);
        expect(wrapper.find('.sync-feedback').length).toBe(1);
        expect(wrapper.find('.sync-feedback').hasClass(expectedClass)).toBe(true);
    });

    it('should have the mod-success class whent the state is ERROR', () => {
        const expectedClass = 'mod-success';
        const wrapper = shallow(<SyncFeedback state={SyncFeedbackState.SUCCESS} />);
        expect(wrapper.find('.sync-feedback').length).toBe(1);
        expect(wrapper.find('.sync-feedback').hasClass(expectedClass)).toBe(true);
    });

    it('should not have the mod-error nor mod-success classes whent the state is NONE or SYNCING', () => {
        const successClass = 'mod-success';
        const errorClass = 'mod-error';

        const noneWrapper = shallow(<SyncFeedback state={SyncFeedbackState.NONE} />);
        expect(noneWrapper.find('.sync-feedback').length).toBe(1);
        expect(noneWrapper.find('.sync-feedback').hasClass(successClass)).toBe(false);
        expect(noneWrapper.find('.sync-feedback').hasClass(errorClass)).toBe(false);

        const syncingWrapper = shallow(<SyncFeedback state={SyncFeedbackState.SYNCING} />);
        expect(syncingWrapper.find('.sync-feedback').length).toBe(1);
        expect(syncingWrapper.find('.sync-feedback').hasClass(successClass)).toBe(false);
        expect(syncingWrapper.find('.sync-feedback').hasClass(errorClass)).toBe(false);
    });
});
